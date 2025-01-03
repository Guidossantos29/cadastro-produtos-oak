import React, { useState } from "react";


const App = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        available: "sim",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        setProducts((prevProducts) => [
            ...prevProducts,
            {
                ...formData,
                price: parseFloat(formData.price),
                available: formData.available === "sim",
            },
        ]);

        
        setFormData({
            name: "",
            description: "",
            price: "",
            available: "sim",
        });
    };

    const sortedProducts = [...products].sort((a, b) => a.price - b.price);

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h1>Cadastro e Listagem de Produtos</h1>

           
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        Nome do Produto:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ marginLeft: "10px", width: "100%" }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        Descrição:
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            style={{ marginLeft: "10px", width: "100%", height: "50px" }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        Valor:
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            style={{ marginLeft: "10px", width: "100%" }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        Disponível para venda:
                        <select
                            name="available"
                            value={formData.available}
                            onChange={handleChange}
                            style={{ marginLeft: "10px", width: "100%" }}
                        >
                            <option value="sim">Sim</option>
                            <option value="não">Não</option>
                        </select>
                    </label>
                </div>
                <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Cadastrar Produto
                </button>
            </form>

            
            <h2>Produtos Cadastrados</h2>
            {products.length === 0 ? (
                <p>Nenhum produto cadastrado ainda.</p>
            ) : (
                <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProducts.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default App;
