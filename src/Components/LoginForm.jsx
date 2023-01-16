export default function LoginForm() {
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className="rounded my-1"
            />

            <label htmlFor="password">Mot de passe</label>
            <input
                type="password"
                id="password"
                name="password"
                className="rounded my-1"
            />

            <button className="bg-purple rounded py-3 my-3">Connexion</button>
        </form>
    );
}
