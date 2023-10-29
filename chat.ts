let currentUser: string = "User 1";

function sendMessage(): void {
    const messageInput: HTMLInputElement = document.getElementById("message-input") as HTMLInputElement;
    const messages: HTMLDivElement = document.getElementById("messages") as HTMLDivElement;

    const message: string = messageInput.value.trim();
    if (message) {
        messages.innerHTML += `<p><strong>${currentUser}:</strong> ${message}</p>`;
        messageInput.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
}

function setUser(user: string): void {
    currentUser = user;
}
