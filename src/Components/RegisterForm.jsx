export default function RegisterForm() {
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

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                className="rounded my-1"
            />

            <label htmlFor="password">Confirmer le Mot de passe</label>
            <input
                type="password"
                id="password"
                name="password"
                className="rounded my-1"
            />

            <button type="button" className="bg-purple rounded p-3 my-3">
                S'inscrire
            </button>
        </form>
    );
}
