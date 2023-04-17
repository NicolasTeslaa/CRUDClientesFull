using System.ComponentModel.DataAnnotations;

namespace CrudClientesAPI.Entities.Models
{
    public class LoginUpdateModel
    {
        public LoginUpdateModel() { }
        [Required(ErrorMessage = "Informe um ID válido ")]
        public string Id { get; set; }
        [Required(ErrorMessage = "Informe o nome completo ")]
        public string NomeCompleto { get; set; }
        [Required(ErrorMessage = "Informe um numero para contato ")]
        public string Celular { get; set; }
        [Required(ErrorMessage = "Informe o correio eletrônico ")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Informe uma senha de acesso ")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Confirme sua senha de acesso ")]
        public string ConfirmePassword { get; set; }
        public DateTime DataNascimento { get; set; }
    }
}