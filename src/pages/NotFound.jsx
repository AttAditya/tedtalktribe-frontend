export function NotFound() {
    return (
        <div className="w-full p-10 flex flex-col items-center gap-4">
            <h1 className="text-9xl font-bold text-primary">
                404 Not Found
            </h1>

            <p className="text-4xl">
                The page you are looking for does not exist.
            </p>
        </div>
    );
}