using System.ComponentModel.DataAnnotations;

namespace CrudClientesAPI.Entities.Models
{
    public class UserCreateModel
    {
        public UserCreateModel() { }

        [Required(ErrorMessage = "Informe o nome completo ")]
        public string NomeCompleto { get; set; }
        [Required(ErrorMessage = "Informe o Email")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Digite sua senha")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Confirme sua nova senha")]
        public string ConfPassword { get; set; }
    }
}