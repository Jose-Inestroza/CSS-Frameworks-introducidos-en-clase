
/*ventana modal de inicio*/
alert("Bienvenido a la pagina de Uber disponibles");



/* funcion de  boton para editar*/
function guardar(){
    alert('Desea continuar? la siguiente pagina es de alto Riesgo')
}


//Evento para crear un nuevo objeto 
document.getElementById("formulario").addEventListener("submit",crear);

//Funcion crear el obejto en un raid para guardarlo en el localstorage
function crear(e){
    codigo = document.getElementById("codigo").value
    Numero = document.getElementById("Numero").value
    Nombre = document.getElementById("Nombre").value
    apellido = document.getElementById("apellido").value
    servicio = document.getElementById("servicio").value
    Estadoconductor = document.getElementById("Estadoconductor").value

    let uber = {
        codigo,
        Numero,
        Nombre,
        apellido,
        servicio,
        Estadoconductor
    }
    if ((uber == "") || (codigo == "") || (Numero == "") || (Nombre == "") || 
        (apellido == "") || (servicio == "") || (Estadoconductor == "")) {  //COMPRUEBA CAMPOS VACIOS
        alert("Los campos no pueden quedar vacios");
        return true;
    }
    if(localStorage.getItem("ubers") === null){
        let ubers = []
        ubers.push(uber)
        localStorage.setItem("ubers",JSON.stringify(ubers))
    }
    else{
        let ubers = JSON.parse(localStorage.getItem("ubers"))
        ubers.push(uber)
        localStorage.setItem("ubers",JSON.stringify(ubers))
    }
    leer();
    document.getElementById("formulario").reset();
    console.log("uber registrado correctamente")
    e.preventDefault()
}

//funcion leer nos muetra los datos atravez de la interfaz que esta guardado en localstorage
function leer(){
    let ubers = JSON.parse(localStorage.getItem("ubers"));
    document.getElementById("tbody").innerHTML = ""
    for(let i=0; i<ubers.length; i++){
        let codigo = ubers[i].codigo
        let Numero = ubers[i].Numero
        let Nombre = ubers[i].Nombre
        let apellido = ubers[i].apellido
        let servicio = ubers[i].servicio
        let Estadoconductor = ubers[i].Estadoconductor
        
        

        document.getElementById("tbody").innerHTML +=
        `<tr>
            <td>${codigo}</td>
            <td>${Numero}</td>
            <td>${Nombre}</td>
            <td>${apellido}</td>
            <td>${servicio}</td>
            <td>${Estadoconductor}</td>
            <td><button onclick="eliminar('${codigo}')" class="btn btn-danger">Eliminar</button></td>
            <td><button onclick="editar('${codigo}')" class="btn btn-success">Editar</button></td>
        </tr>`
    }
}

//funcion editar, el campos tomando codigo como valor para identificar y buscar esos valores y reflejarlos en las cajas  
function editar(codigo){
    let ubers = JSON.parse(localStorage.getItem("ubers"));
    for(let i=0; i<ubers.length; i++){
        if(ubers[i].codigo === codigo){
            document.getElementById("body").innerHTML = `

            <div class="row">
            <div class="col-md-10">
                <div class="card-header">
                    <h1>Edicion uber disponibles </h1>
                </div>
                <div class ="card-body">
                    <form>
                        <div class="form-group">
                            <input type="text" id="newcodigo" class="form-control" value="${ubers[i].codigo}"><br>
                        </div>
                        <div class="form-group">
                            <input type="number" id="newNumero" class="form-control" value="${ubers[i].Numero}"><br>
                        </div>
                        <div class="form-group">
                            <input type="text" id="newNombre" class="form-control" value="${ubers[i].Nombre}"><br>
                        </div>
                        <div class="form-group">
                            <input type="text" id="newapellido" class="form-control" value="${ubers[i].apellido}"><br>
                        </div>
                        <div class="form-group">
                            <input type="text" id="newservicio" class="form-control" value="${ubers[i].servicio}"><br>
                        </div>
                        <div class="form-group">
                        <input type="text" id="newEstadoconductor" class="form-control" value="${ubers[i].Estadoconductor}"><br>
                    </div>
                    </form>
                    <button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button>
                    <button class="btn btn-primary" onclick="vistaPrincipal()">Cancelar</button>
                </div>
            </div>`
        }
    }
}


//funcion actualizar, permite cambiar los datos del tabla 
function actualizar(i){
    let ubers = JSON.parse(localStorage.getItem("ubers"));
    ubers[i].codigo = document.getElementById("newcodigo").value;
    ubers[i]. Numero = document.getElementById("newNumero").value;
    ubers[i].Nombre = document.getElementById("newNombre").value;
    ubers[i].apellido = document.getElementById("newapellido").value;
    ubers[i].servicio = document.getElementById("newservicio").value;
    ubers[i].Estadoconductor = document.getElementById("newEstadoconductor").value;
    localStorage.setItem("ubers",JSON.stringify(ubers));
    vistaPrincipal()
}

//funcion eliminar, elinima gracias al campo codigo que actua como identificador 
function eliminar(codigo){
    let ubers = JSON.parse(localStorage.getItem("ubers"));
    for(let i=0; i<ubers.length; i++){
        if(ubers[i].codigo === codigo){
            ubers.splice(i,1);
        }
    }
    localStorage.setItem("ubers",JSON.stringify(ubers))
    leer();
}


//funcion para mostrar la inteerfaz principal
function vistaPrincipal(){
    document.getElementById("body").innerHTML = `
    <section class="Form my-2 mx-5" >
        
    
              <br><br>
    
            <div class="container border-m4 d-flex justify-content-center align-items-center"  id="body"> 
                <div class="row no-gutters">
                    <div class="col-lg-20 px-15 pt-15">
                        <h1 class="font-weight-bold py-3">Modulo de control</h1>
                        <h4 >Informacion sobre la ubicacion de nuestros conductores</h4><br>

                        <!-- CARRUSEL DE IMÁGENES -->
                        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../Proyecto3/scr/img1.jpeg" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Adminstracion de los uber disponibles</h5>
                                    <p>LLeva un control estricto de los uber que estan en movimiento</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="../Proyecto3/scr/img2.jpg" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Ubicación en tiempo real</h5>
                                    <p>Donde cuando y como es la palabra que describe nuestro sistemas</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="../Proyecto3/scr/img3.jpg" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Registro</h5>
                                    <p>La ubicación GPS nos permite conocer donde estan nuestros conductores</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button><br>
                        </div>
    
                        <h4 id="mensaje">Proceda a completar el formulario</h4><br>


    
    
                <!-- formulario-->
                    <form class="needs-validation" id="formulario" novalidate>
    
                        <div class="form-row">
                            <div class="col-lg-7">
                            <input type="text" id="codigo" name="letras" placeholder="Codigo del vehiculo" class="form-control my-3 p-3"  required>
                            <div class="valid-feedback">Correcto</div>
                            <div class="invalid-feedback">Complete los datos</div>
                        </div>
                        
    
                        <div class="col-lg-7">
                            <input type="number" id="Numero" placeholder="Numero del vehiculo" class="form-control my-3 p-3" pattern="[0-9]+" required>
                            <div class="valid-feedback">Correcto</div>
                            <div class="invalid-feedback">Complete los datos con valores numericos</div>
                        </div>
    
                        <div class="col-lg-7">
                            <input type=""  id="Nombre" placeholder="Nombre del conductor" class="form-control my-3 p-3" pattern="[a-zA-Z]+" required>
                            <div class="valid-feedback">Completo</div>
                            <div class="invalid-feedback">Datos incorrectos</div>
                        </div>
    
                        <div class="col-lg-7">
                            <input type="" id="apellido" placeholder="Apellido del conductor" class="form-control my-3 p-3" pattern="[a-zA-Z]+"  required>
                            <div class="valid-feedback">Completo</div>
                            <div class="invalid-feedback">Datos incorrectos</div>
                        </div>
    
                         <div class="col-lg-7">
                            <input type=""  id="servicio"  placeholder="servicio" class="form-control my-3 p-3" pattern="[a-zA-Z]+"  required>
                            <div class="valid-feedback">Completo</div>
                            <div class="invalid-feedback">Datos incorrectos</div>
                        </div>
    
                        <div class="col-lg-7">
                            <input type="" id="Estadoconductor" placeholder="Estadoconductor" class="form-control my-3 p-3" pattern="[a-zA-Z]+"  required>
                            <div class="valid-feedback">Completo</div>
                            <div class="invalid-feedback">Datos incorrectos</div>
                        </div>
                          
                        
                            <div class="col-lg-7"><!-- ventana modal -->
                                <button type="submit" class="btn1 mt-3 mb-5" onclick="boton()">Guardar</button>
                            </div>
    
                        </form>
                    </div>
    
    
                    <div class ="table table-striped table-dark">
                         
    
                        <table class="table">
                            <div class="card-header">
                            
                            </div>
                            <thead class="bg-primary">
                                <tr>
                                    <th scope="col" class="bg-primary">Codigo</th>
                                    <th scope="col" class="bg-success">Numero</th>
                                    <th scope="col" class="bg-warning">Nombre</th>
                                    <th scope="col" class="bg-danger">Apellido</th>
                                    <th scope="col" class="bg-info">Servicio</th>
                                    <th scope="col" class="bg-primary">Estado conductor</th>
                                    <th scope="col" class="bg-warning">eliminar</th>
                                    <th scope="col" class="bg-danger">editar</th>
                                    
                                </tr>
                            </thead>
                            <tbody id="tbody" style="color: white;">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
    
                </div>
                
                
            </div>
        </div>
        </section>
    `
leer();
}
leer();