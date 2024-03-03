export function Colors({ objects }) {
    return (
        <ul>
            {objects.map((obj) => (
                <li key={obj.id}>{obj.name}</li>
            ))}
        </ul>
    );
}
