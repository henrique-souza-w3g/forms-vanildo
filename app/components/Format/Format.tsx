export const formatCPF = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não é número
    value = value.replace(/^(\d{3})(\d)/, "$1.$2");
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1-$2");
    return value.substring(0, 14); // Garante que não passe do limite
};

export const formatCNPJ = (value: string) => {
        value = value.replace(/\D/g, ""); // Remove tudo que não é número
        value = value.replace(/^(\d{2})(\d)/, "$1.$2");
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
        return value.substring(0, 18); // Garante que não passe do limite
    };