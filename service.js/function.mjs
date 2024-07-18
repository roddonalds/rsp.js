export default function (fn) {

    console.debug('Adding function:', fn);

    if (!fn.id) {
        throw new Error('function must have an id');
    }

    if (!fn.fun) {
        throw new Error('function must have an execute');
    }

    this.functions[fn.id] = fn;
};
