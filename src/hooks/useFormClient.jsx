import moment from "moment/moment";
import { useEffect } from "react";
import { useState } from "react";
import { GetClients, registerClient } from "../Apis/Apis";
import { Components } from "../components/dashboard/Dashboard";
import { UseComponents } from "./useComponents";

export function UserFormClient(){
    const [image,setImage] = useState('/image/registro-sem-img.png')
    const [clients,setClients] = useState([])
    const {components} = Components()
    const {changeComponent} = UseComponents(components)
    const [useForm, setUseForm] = useState({
        image: '',
        company: '',
        user_id: '',
        manager: '',
        nif: '',
        Email: '',
        license_id: '',
        city: '',
        address: '',
        road: '',
        phone: '',
        ActiveLicense: '',
        ExpirationDate: '',
        LicenseType: '',
        state: '',
    })

    const momentFormat = ((date)=>{
        return moment(date).format('DD-MM-YYYY H:mm:ss')
    })

    useEffect(()=>{
        (async()=>{
            const response = await GetClients()
            setClients(response.data.client)
        })()
    },[])

    const ShowClient = ((client)=>{
        setUseForm(client)
        changeComponent(1)
    })

    function HandleFormClient(client){
        if (client) {
            setUseForm(client)
        }
    }

    const  handleSubmitForm = async(form)=>{
        form.preventDefault()
        const response = await registerClient(useForm)
    }

    const onFileChangeImg = (e) => {
        var files = e.target.files || e.dataTransfer.files;
        // Verificar o formato da imagem
        let arquivo = files[0].name;
        let extension = arquivo.indexOf('.') < 1 ? '' : arquivo.split('.').pop();
        if (extension == "") {
            return false;
        } else {
            // verificar se este formato existe no Array
            let formatos_permitidos = ['jpg', 'png', 'gif', 'jpeg', 'JPG', 'PNG', 'GIF', 'JPEG'];
            let resultado = formatos_permitidos.includes(extension);
            if (resultado == false) {
                return false;
            } else {
                // Tamanho da foto em MB
                var tamanho_maximo = 2242880
                var fsizet = 0;
                for (var i = 0; i <= e.target.files.length - 1; i++) {
                // tamanho do arquivo
                var fsize = e.target.files.item(i).size;
                // total calculado
                fsizet = fsizet + fsize;
                }
                if (fsizet > tamanho_maximo) {
                    console.log('tamanho de imagem muito grande');
                } else {
                    createImg(files[0]);
                }
            }
        }
    }

    const createImg = (file) => {
        var imagem = new Image;
        var reader = new FileReader;
    
        reader.onload = (e) => {
            setImage(e.target.result);
        };
    
        reader.readAsDataURL(file);
    }

    function handleUpdateInput(e){
        setUseForm((prev)=>{
            return {...prev, [e.target.id]: e.target.value}
        })
    }

    return {
        HandleFormClient,
        useForm,
        onFileChangeImg,
        image,
        handleSubmitForm,
        handleUpdateInput,
        clients,
        ShowClient,
        momentFormat
    }
    
}