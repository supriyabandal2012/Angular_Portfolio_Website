export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly CSHARP = new Tag('c#', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly NODEJS = new Tag('Node.Js', 'brown');
    static readonly ELIXIR = new Tag('Elixir', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly REACT = new Tag('React', 'blue');

    private constructor(private readonly key: string, public readonly color: string) {

    }
    toString() {
        return this.key;
    }
}