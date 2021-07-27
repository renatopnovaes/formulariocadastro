import React, {useEffect, useState} from "react";

const ContactForm = (props) => {
    const initialFieldValues ={
        codigo: '',
        quantidade: '',
        produto: '',
        observacao: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if(props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else 
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
   
    
    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)                
    }
       
    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-code " ></i>
                    </div>
                </div>
                <input className="form-control" placeholder= "Código" name="codigo"
                    value= {values.codigo}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-row">
                <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-box"></i>
                    </div>
                </div>
                <input className="form-control" placeholder= "Quantidade" name="quantidade"
                    value= {values.quantidade}
                    onChange={handleInputChange}
                />
                </div>

                <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-comments "></i>
                    </div>
                </div>
                <input className="form-control" placeholder= "Produto" name="produto" readOnly
                    value= {values.produto}
                    onChange={handleInputChange}
                />
                </div>
               
                
                
            </div>
                <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Observação</span>
                </div>
                < textarea className = "form-control"   name="observacao" 
                    value= {values.observacao}
                    onChange={handleInputChange}/>
                </div>                   
              
                <div className="form-group">
                    <input type="submit" value={props.currentId=='' ? "Salvar" : "Atualizar"} className="btn btn-primary btn-block"  />
                </div>

        </form>
    );
}

export default ContactForm;
