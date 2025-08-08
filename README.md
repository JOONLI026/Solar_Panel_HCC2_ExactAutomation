# Solar_Panel_HCC2_ExactAutomation

## EPM Installation Guide on Windows (for HCC2)

### Prerequisites
Before beginning the installation process, ensure you have the following:
- A Windows OS (not supported on macOS)
- Internet access
- Access credentials for HCC2 (default admin password: Stsb1234)
- Unity Edge interface access
- Ability to configure your network adapter's IP address

---

### 1. Install Azure Storage Explorer

**Step-by-Step:**

1.1 Go to the official Azure Storage Explorer download page:  
https://azure.microsoft.com/en-us/products/storage/storage-explorer/

1.2 Scroll down and select **Windows x64** to begin downloading the installer.  
1.3 Run the downloaded installer and complete the installation process.

**Reference:**  
Refer to the official Sensia knowledge base article here:  
https://sensiacustomerserviceportal.powerappsportals.com/knowledgebase/article/KA-04676/en-us

This article covers:
- Installation of Azure Storage Explorer
- Connecting to storage using a SAS URL
- Navigating to blob containers
- Downloading the required `.msi` installer for EPM

---

### 2. Connect Azure Storage Explorer to the Sensia Blob Container

**Steps:**

2.1 Open Azure Storage Explorer.  
2.2 Click the **"cable" icon on the navigation tree**.  
2.3 Choose **"Use a shared access signature (SAS) URI"** as the Connection Method.  
2.4 Paste the provided SAS URL into the URI field:  
`https://saslrs8033psd.blob.core.windows.net/softwaredownloads?sp=rl&st=2025-07-04T09:03:32Z&se=2025-12-31T17:03:32Z&spr=https&sv=2024-11-04&sr=c&sig=dw9KfLq8o8A0cglSFVJ4Tyc%2FtKmNz4qb9%2BmfboHcFqw%3D`

> ⚠️ **Note:** The SAS URL automatically regenerates every six months. Refer to the same article to obtain an updated SAS URL when your link expires.

2.5 Click **Next** to complete the connection.

---

### 3. Download the EPM Installer

3.1 In the left navigation pane, go to:  
```
Blob Containers -> softwaredownloads -> HCC2
```

3.2 Select the appropriate HCC2 version folder (e.g., `V1.9.1.396`).  
3.3 Locate and download the `.msi` file for EPM.  
- The download will begin automatically once the file is selected.

---

### 4. Install the EPM

4.1 Run the downloaded `.msi` file.  
4.2 Follow the installer’s steps to complete installation of the Edge Package Manager on your Windows system.

---

### 5. Connect to HCC2 via Unity Edge

Before using EPM, you must connect to the HCC2 controller via its local network.

**Steps to Connect:**

5.1 Connect your Windows laptop to the `STSB_IIOT` Wi-Fi network.  
5.2 Change your PC's IP address manually to `192.168.3.x`  
(where `x` can be any number from 2 to 254, excluding 45).  
- Subnet mask: `255.255.255.0`  
- Gateway: leave blank or use `192.168.3.1`

**Access Unity Edge Interface:**

1. Open a browser (Chrome/Edge).  
2. Visit: `http://192.168.3.45`  
3. Login with:  
   - Username: `admin`  
   - Password: `Stsb1234`  

This is the same credential you’ll use to connect EPM to HCC2 in the next step.

---

### 6. Launch and Connect EPM to HCC2

6.1 Launch the installed Edge Package Manager (EPM).  
6.2 When prompted, connect to your HCC2 device using:  
- IP Address: `192.168.3.45`  
- Username: `admin`  
- Password: `Stsb1234`

---

### 📄 Refer to the Official Manual

Refer to the HCC2 software guide for full details on using the EPM:  
- **File:** `V1.9.1.396_HCC2 Software.pdf`  
- **Section:** `4.1 USING THE HCC2 EDGE PACKAGE MANAGER (EPM)`

This section provides guidance on:
- Uploading and installing packages
- Managing applications on HCC2
- Common troubleshooting steps

### Warning
Upgrading the application bundle will reboot the IO controller in the HCC2. Verify that the 
process is in a safe state before updating. 

### Important Reminders 
- Login Password. The default username: admin, password: SensiaHCC2# can be used to log in 
to both Unity Edge and EPM for the first connection.  
Once you log in as admin in Unity Edge, you must change the default password. Keep this 
password safe – if you lose that password, it will be difficult to get access to your device.  
This same password must be used in EPM, too. 
- Subnet Precaution. When configuring the HCC2, pay special attention to your network setup 
and avoid configuring two network interfaces with the same subnet. The sharing of a subnet could 
result in abnormal network behavior. 
If your HCC2 fails to boot after the OS upgrade, contact Sensia support for assistance. 
- When using the Modbus Protocol Map Editor, use .pdef for saving and loading across versions 
and devices.  The exported .csv format is only suitable for temporary editing and re-import. 