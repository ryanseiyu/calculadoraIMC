import { useEffect, useState } from "react";
import styles from './Calculadora.module.css';

const Calculadora = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const renderizaResultado = () => {
        const imc = peso / (altura * altura)
        if (imc < 18.5) {
            return <p>Magreza</p>;
        } else if (imc < 25 && imc >= 18.5) {
            return <p>Normal</p>;
        }
        else if (imc < 30 && imc >= 25) {
            return <p>Sobrepeso</p>;
        }
        else if (imc >= 30) {
            return <p>Obeso</p>;
        }
    };

    return (
        <div className="container">

            <div className={styles.list}>
                <div className={styles.grid}>
                    <input type="number" onChange={(evento) => setAltura(parseFloat(evento.target.value))} className={styles.listItem} placeholder="Digite a altura" min="0" max="3" step="0.1"/>
                </div>
                
                <div className={styles.grid}>
                    <input type="number" onChange={(evento) => setPeso(parseFloat(evento.target.value))} className={styles.listItem} placeholder="Digite o peso" min="0" max="700" step="0.1"/>
                </div>

                <div className={styles.gridResultado}>
                    <div className={styles.resultado}>
                        <p>{renderizaResultado()}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Calculadora;