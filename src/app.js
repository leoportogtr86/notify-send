const Notify = require('./class/Notify.class');

const notify = new Notify();

// notify.sendOk('Ação concluída com sucesso!');
// notify.sendNok('Algo de errado não está certo...');
notify.sendWarning('Cuidado...');
