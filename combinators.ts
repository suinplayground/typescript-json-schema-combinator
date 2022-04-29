type Identity = <T>(x: T) => T;
const identity: Identity = (x) => x;

type Constant = <T>(x: T) => () => T;
const constant: Constant = (x) => () => x;

type Apply = <T, U>(f: (x: T) => U) => (x: T) => U;
const apply: Apply = (f) => (x) => f(x);

type Thrush = <T, U>(x: T) => (f: (x: T) => U) => U;
const thrush: Thrush = (x) => (f) => f(x);

type Compose = <T, U, V>(f: (x: U) => V) => (g: (x: T) => U) => (x: T) => V;
const compose: Compose = (f) => (g) => (x) => f(g(x));
