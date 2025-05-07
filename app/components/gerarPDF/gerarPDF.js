import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const input = document.getElementById('container-print');
const header = document.getElementById('header');
const vendedor = document.getElementById('vendedor');
const empresa = document.getElementById('empresa');
const plano = document.getElementById('plano');
const beneficiario = document.getElementById('beneficiario');


const elementos = [vendedor, empresa, plano, beneficiario]

export const gerarPDF = async () => {
    const doc = new jsPDF('p', 'mm', 'a4')

    for (let i = 0; i < elementos.length; i++) {
        const elemento = elementos[i]
        if (!elemento) continue

        await html2canvas(elemento, {
            logging: true,
            scale: 2,
            useCORS: true,
            letterRendering: true,
        }).then((canvas) => {
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const imgData = canvas.toDataURL('image/png', 1.0);

            doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            if (i < elementos.length - 1) {
                doc.addPage();
            }
        })
    }
    doc.save('documento.pdf')
    return doc.output('datauristring')
}