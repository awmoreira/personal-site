"""Generate public, selectable two-page EN/PT resumes from the website's factual content.
Requires reportlab; run export-content.mjs first after editing content.ts.
"""
import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'scripts/resume-content.json').read_text())
out = ROOT / 'public/resume'
out.mkdir(parents=True, exist_ok=True)
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCustom', fontName='Helvetica-Bold', fontSize=23, leading=29, textColor=HexColor('#202124'), spaceAfter=8))
styles.add(ParagraphStyle(name='LabelCustom', fontName='Helvetica-Bold', fontSize=9, leading=14, textColor=HexColor('#4255c7'), spaceBefore=18, spaceAfter=8))
styles.add(ParagraphStyle(name='RoleCustom', fontName='Helvetica-Bold', fontSize=12, leading=17, spaceAfter=4))
styles.add(ParagraphStyle(name='BodyCustom', fontName='Helvetica', fontSize=9.5, leading=14.5, textColor=HexColor('#33353b'), spaceAfter=8))
styles.add(ParagraphStyle(name='SmallCustom', fontName='Helvetica', fontSize=8, leading=12, textColor=HexColor('#61636b'), spaceAfter=7))

def para(text, style='BodyCustom'):
    return Paragraph(escape(text.replace('—', '-').replace('–', '-').replace('→', 'to').replace('’', "'")), styles[style])

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(HexColor('#dddde3'))
    canvas.line(45, 39, A4[0]-45, 39)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(HexColor('#61636b'))
    canvas.drawString(45, 25, 'Allan Winckler Moreira | awmoreira@gmail.com')
    canvas.drawRightString(A4[0]-45, 25, str(doc.page))
    canvas.restoreState()

for lang, t in data['content'].items():
    en = lang == 'en'
    elements = [para('ALLAN WINCKLER MOREIRA', 'NameCustom'), para('Senior Software Engineer | Tech Lead & Architect', 'RoleCustom'), para('Porto Alegre, Brazil | Remote | awmoreira@gmail.com', 'SmallCustom'), Paragraph('<link href="https://github.com/awmoreira">github.com/awmoreira</link> | <link href="https://www.linkedin.com/in/awmoreira/">linkedin.com/in/awmoreira</link>', styles['SmallCustom'])]
    elements += [para('PROFILE' if en else 'PERFIL', 'LabelCustom'), para(t['intro']), para('15+ years in web development and 7+ years in mobile. Technical leadership across frontend architecture, distributed backend systems and engineering quality.' if en else 'Mais de 15 anos em desenvolvimento web e mais de 7 anos em mobile. Liderança técnica em arquitetura frontend, sistemas backend distribuídos e qualidade de engenharia.')]
    elements.append(para('EXPERIENCE' if en else 'EXPERIÊNCIA', 'LabelCustom'))
    for index, fact in enumerate(data['facts']):
        if index == 2:
            elements += [PageBreak(), para('EXPERIENCE / CONTINUED' if en else 'EXPERIÊNCIA / CONTINUAÇÃO', 'LabelCustom')]
        story = t['stories'][fact['id']]
        heading = fact['company'] + (' (formerly QikServe)' if en else ' (antiga QikServe)') if index == 0 else fact['company']
        elements += [KeepTogether([para(heading, 'RoleCustom'), para(fact['role'] + ' | ' + fact['dates'][lang], 'SmallCustom')]), para(story['summary']), para(story['impact'])]
        if index == 0:
            elements.append(para(story['details'][0]))
        elements.append(Spacer(1, 7))
    elements += [para('TECHNICAL SKILLS' if en else 'COMPETÊNCIAS TÉCNICAS', 'LabelCustom'), para('TypeScript, JavaScript, Java | React, React Native, Next.js, Storybook | Node.js, Spring Boot, GraphQL, REST, Amazon SQS | Microservices, idempotency, resilience patterns, design systems | Jest, Vitest, Playwright, Cypress, CI/CD, Docker')]
    elements += [para('AI-AUGMENTED ENGINEERING' if en else 'ENGENHARIA COM APOIO DE IA', 'LabelCustom'), para('Reduced test writing time by approximately 60% with AI-assisted generation using Copilot and Devin AI across multiple projects. Apply AI workflows to system design, refactoring, documentation and code review, and mentor teams on their integration into engineering practices.' if en else 'Reduzi em aproximadamente 60% o tempo de escrita de testes com geração assistida por Copilot e Devin AI em diferentes projetos. Aplico fluxos com IA em desenho de sistemas, refatoração, documentação e revisão de código, e oriento equipes na integração dessas ferramentas à engenharia.')]
    elements += [para('EDUCATION & LANGUAGES' if en else 'FORMAÇÃO E IDIOMAS', 'LabelCustom'), para(t['stories']['cefet']['education']), para('Computer Networking | Estácio de Sá University | 2006-2010' if en else 'Redes de Computadores | Universidade Estácio de Sá | 2006-2010'), para('English: professional proficiency | Portuguese: native' if en else 'Inglês: proficiência profissional | Português: nativo')]
    doc = SimpleDocTemplate(str(out / f'allan-winckler-{lang}.pdf'), pagesize=A4, rightMargin=45, leftMargin=45, topMargin=39, bottomMargin=53, title=f'Allan Winckler Moreira - {"Resume" if en else "Currículo"}', author='Allan Winckler Moreira')
    doc.build(elements, onFirstPage=footer, onLaterPages=footer)
    print(out / f'allan-winckler-{lang}.pdf')
