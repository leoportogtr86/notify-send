const { exec } = require('child_process');

class Notify {

    sendOk(msg) {
        const notify = `notify-send -i info "Sucesso!" "${msg}"`;
        exec(notify);
        return null;
    }

    sendNok(msg) {
        const notify = `notify-send -i error "OOps..." "${msg}"`;
        exec(notify);
        return null;
    }

    sendWarning(msg) {
        const notify = `notify-send -i messagebox_warning "Atenção!" "${msg}"`;
        exec(notify);
        return null;
    }
}

module.exports = Notify;