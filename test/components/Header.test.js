describe('Header Component', () => {
    it('should create a header with the correct title', () => {
        const header = document.createElement('header');
        header.textContent = 'Header Title';
        
        // Test if the header is created
        expect(header.textContent).toBe('Header Title');
        
        // Test if the header has the correct tag
        expect(header.tagName).toBe('HEADER');
    });
});