# Image Upload 

This is a simple webpage that allows users to upload images from their devices and display them on the page. Additionally, there is a password protection feature to control access to certain functionality.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Image Upload:** Users can upload images from their devices, and the images will be displayed on the webpage.

2. **Password Protection:** A password prompt is implemented to control access to certain features. The default password is '0000'.

3. **Dynamic Button:** The "Upload Image" button dynamically changes after entering the correct password, revealing a new button for subsequent image uploads.

4. **Image Display Order:** Uploaded images are displayed in a "first come, last serve" pattern, meaning the latest uploaded image will be shown first.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/abdul-1432/Image-Uploader
    ```

2. Open the `index.html` file in your preferred web browser.

## Usage

1. Open the `index.html` file in a web browser.

2. Click the "Upload Image" button to select an image from your device. The uploaded image will be displayed on the webpage.

3. To access additional features, click the "Password" button, enter the password '0000', and click "Submit".

4. After entering the correct password, the "Upload Image" button will be replaced with a new "Upload Image" button for subsequent uploads.

## Security Considerations

- **Client-Side Security:** This code provides basic client-side password protection for demonstration purposes. In a real-world scenario, it's crucial to implement server-side authentication and authorization for better security.

- **Password Strength:** Consider using more robust password and encryption mechanisms for production applications.

## Contributing


## License

This project is licensed under the [MIT License](LICENSE).
