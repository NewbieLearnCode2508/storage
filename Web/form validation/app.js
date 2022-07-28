function Validator(options) {
    const formElement = document.querySelector(options.form);
    const ruleSelector = {};

    const validate = (inputElement, formMessage, rule)=> {
        var errorMessage;

        if(Array.isArray(ruleSelector[rule.selector])) {
            ruleSelector[rule.selector].push(rule.test);
        }else {
            ruleSelector[rule.selector] = [rule.test];
        }

        const rules = ruleSelector[rule.selector];

        for(var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

        if(errorMessage) {
            formMessage.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }else {
            formMessage.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
    if(formElement) {
        options.rules.forEach((rule)=> {
            var inputElement = document.querySelector(rule.selector);
            var formMessage = inputElement.parentElement.querySelector('.form-message');

            inputElement.onblur = ()=> {
                validate(inputElement, formMessage, rule)
            }

            inputElement.oninput = ()=> {
                formMessage.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
            }
        });
    }
}

Validator.isRequied = (selector, message)=> {
    return {
        selector,
        test(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập vào trường này';
        }
    }
}

Validator.isEmail = (selector, message)=> {
    return {
        selector,
        test(value) {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập Email';
        }
    }
}

Validator.isMinLength = (selector, min, message)=> {
    return {
        selector,
        test(value) {
            return value.length >= min ? undefined : message || `Nhập ít nhất ${min} ký tự`;
        }
    }
}

Validator.isConfirm = (selector, confirmValue, message)=> {
    return {
        selector,
        test(value) {
            return value === confirmValue() ? undefined : message || 'Giá trị không khớp';
        }
    }
}