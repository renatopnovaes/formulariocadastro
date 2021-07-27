import React, {useState, useEffect} from 'react';
import ContactForm from "./ContactForm"
import firebaseDb from "../firebase";

const Contacts = () => {
    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val()!=null)
            setContactObjects({
                ...snapshot.val()
            })
            else
            setContactObjects({})
        })

    }, [])
    
    const addOrEdit = obj => {
        if (currentId=='')
        firebaseDb.child('contacts').push(
            obj, err => {
                if(err)
                    console.log(err)
                else
                    setCurrentId('')
        } 
      )
      else 
      firebaseDb.child(`contacts/${currentId}`).set(
          obj,
          err => {
              if (err)
              console.log(err)
              else
              setCurrentId('')
          }
      )
    }

    const onDelete = key => {
        if(window.confirm ('Tem certeza que quer excluir esse item?')){
            firebaseDb.child(`contacts/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
            }
        )
    }
}


    return (
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Entradas e Saídas</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-md-5">
                <ContactForm {...({addOrEdit:addOrEdit, currentId, contactObjects})}/>
            </div>
            <div className="col-md-7">
                <table className = "table table-borderless tabble-stripped">
                    <thead className="thead-light">
                        <tr>
                            <th>Código</th>
                            <th>Quantidade</th>
                            <th>Observação</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(contactObjects).map(id=>{
                                return <tr key={id}>
                                    <td>{contactObjects[id].codigo}</td>
                                    <td>{contactObjects[id].quantidade}</td>
                                    <td>{contactObjects[id].observacao}</td>
                                    <td><a className="btn text-primary" onClick={()=> {setCurrentId(id)}}>
                                        <i className="fas fa-pencil-alt"></i></a>
                                        <a className="btn text-danger" onClick={() => {onDelete(id)}}>
                                        <i className="fas fa-trash-alt"></i></a>  
                                    </td>
                                    

                                </tr>
                            })
                        }

                    </tbody>

                </table>
                <div>lista de lançamentos</div>
            </div>
        </div>
        </>
    );
}

export default Contacts;
