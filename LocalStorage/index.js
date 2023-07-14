class LocalStorage {
    // Visualizar todos los elementos del localStorage
    static visualizar() {
      const data = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        data[key] = value;
      }
      return data;
    }
  
    // Agregar nombre, apellido e identificación al localStorage
    static agregar(nombre, apellido, identificacion) {
      const data = this.visualizar();
      data.nombre = nombre;
      data.apellido = apellido;
      data.identificacion = identificacion;
      localStorage.setItem('data', JSON.stringify(data));
    }
  
    // Editar nombre, apellido o identificación en el localStorage
    static editar(nombre, apellido, identificacion) {
      const data = this.visualizar();
      data.nombre = nombre || data.nombre;
      data.apellido = apellido || data.apellido;
      data.identificacion = identificacion || data.identificacion;
      localStorage.setItem('data', JSON.stringify(data));
    }
  
    // Eliminar nombre, apellido e identificación del localStorage
    static eliminar() {
      localStorage.removeItem('data');
    }
  
    // Eliminar todo el localStorage
    static eliminarTodo() {
      localStorage.clear();
    }
  }
// Visualizar todos los elementos del localStorage
const data = LocalStorage.visualizar();
console.log(data);

// Agregar nombre, apellido e identificación al localStorage
LocalStorage.agregar('Albert', 'Ogando', '1131421323');

// Editar nombre, apellido o identificación en el localStorage
LocalStorage.editar('Daniel', 'Encarnacion');
LocalStorage.editar(null, null, '231553421');

// Eliminar nombre, apellido e identificación del localStorage
LocalStorage.eliminar();

// Eliminar todo el localStorage
LocalStorage.eliminarTodo();
  