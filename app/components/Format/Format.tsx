export const formatCPF = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não é número
    value = value.replace(/^(\d{3})(\d)/, "$1.$2");
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1-$2");
    return value.substring(0, 14); // Garante que não passe do limite
};

export const formatRG = (value:string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não é número
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1-$2");
    return value.substring(0,12)
}

export const formatCNPJ = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não é número
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
    return value.substring(0, 18); // Garante que não passe do limite
    };

export const formatCEP = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não é número
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    return value.substring(0, 9); // Garante que não passe do limite
    };

export const formatCelular = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d)/, "($1) $2"); // Adiciona o DDD com espaço
    }
    if (value.length > 6) {
        value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o traço depois dos 5 primeiros dígitos
    }
    return value.substring(0, 15); // Garante que não passe do limite (15 caracteres, incluindo espaço e traço)
};

export const formatTelefone = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d)/, "($1) $2"); // Adiciona o DDD com espaço
    }
    if (value.length > 5) {
        value = value.replace(/(\d{4})(\d)/, "$1-$2"); // Adiciona o traço depois dos 5 primeiros dígitos
    }
    return value.substring(0, 14); // Garante que não passe do limite (15 caracteres, incluindo espaço e traço)
}

export const formatValor = (value: string) => {
    // Substitui pontos por nada e mantém só números e vírgula
    value = value.replace(/[^\d,]/g, "");

    const parts = value.split(",");
    let integer = parts[0];
    let decimal = parts[1] || "";

    // Formata parte inteira com pontos (milhares)
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    if (value.includes(",")) {
        return `R$ ${integer},${decimal.substring(0,2)}`;
    } else {
        return `R$ ${integer}`;
    }
}

export const formatData = (isoDate: string) => {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
};

export const formatIdade = (dataNascimento: string) => {
    if (!dataNascimento) return "";
    const hoje = new Date();
    const [ano, mes, dia] = dataNascimento.split("-").map(Number);
    const nascimento = new Date(ano, mes - 1, dia);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();

    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
    };
