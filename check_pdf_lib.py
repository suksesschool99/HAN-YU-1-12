import os
import sys

print("Python version:", sys.version)

# Check for pdf libraries
for lib in ['pypdf', 'PyPDF2', 'pymupdf', 'fitz', 'pdfminer', 'pdfplumber']:
    try:
        __import__(lib)
        print(f"Available: {lib}")
    except ImportError:
        pass
