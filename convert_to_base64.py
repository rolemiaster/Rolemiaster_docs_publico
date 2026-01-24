import base64
import os

file_path = r"Y:\---NUBE---\Google Drive\Programacion\RolemIAster\Web\assets\logo Powered by gemini_512x512.jpg"

if not os.path.exists(file_path):
    print(f"Error: File not found at {file_path}")
    exit(1)

with open(file_path, "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
    # Determine mime type based on extension
    mime_type = "image/jpeg"
    if file_path.lower().endswith(".png"):
        mime_type = "image/png"
    
    result = f"data:{mime_type};base64,{encoded_string}"
    
    with open("logo_base64.txt", "w") as f:
        f.write(result)
        
    print("Base64 string written to logo_base64.txt")
