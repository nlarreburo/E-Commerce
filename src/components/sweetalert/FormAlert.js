import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export const FormAlert = () => {

    const alertForm = () =>{
        MySwal.fire({
            title: <p>Hello World</p>,
            html: ` <label> Nombre </label>
                    <input type="text" id="login" class="swal2-input" placeholder="Username">
                    <input type="number" id="phone" class="swal2-input" placeholder="Phone">,
                    <input type="string" id="direccion" class="swal2-input" placeholder="Direccion">`, //Poner type number el telefono

          }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
          })
          
    }

  return (
    <div>
        <button className='btn' onClick={alertForm}>Click alert</button>
    </div>
  )
}
