import React from 'react';
import Swal from 'sweetalert2';
import UserService from '../../services/user.service';

const DeleteUser = () => {
  const handleDeleteUser = async () => {
    // Mostrar una alerta de confirmación
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.Se eliminarán también todos tus productos.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      background: 'white',
      color: 'rgb(16,26,27)',
     
    });

    if (result.isConfirmed) {
      try {
        const userService= new UserService()
        await userService.deleteUser(); 
        Swal.fire('Cuenta eliminada', 'Tu cuenta ha sido eliminada con éxito.', 'success');
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        Swal.fire('Error', 'Hubo un error al eliminar la cuenta.', 'error');
      }
    }
  };

  return (
    <>
      <button className="btns" onClick={handleDeleteUser}>
        Eliminar mi cuenta
      </button>
    </>
  );
};

export default DeleteUser;