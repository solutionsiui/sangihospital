export async function submitAppointmentRequest(
  payload: Record<string, unknown>,
): Promise<{ success: boolean; message: string }> {
  const response = await fetch("/api/appointment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as { success: boolean; message: string };

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to submit appointment request.");
  }

  return data;
}

export async function submitContactRequest(
  payload: Record<string, unknown>,
): Promise<{ success: boolean; message: string }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as { success: boolean; message: string };

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to send your message.");
  }

  return data;
}
