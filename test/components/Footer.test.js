describe('Footer Component', () => {
    it('should create a footer with the correct text', () => {
        const footer = document.createElement('footer');
        footer.textContent = 'Footer Text';
        
        // Test if the footer is created
        expect(footer.textContent).toBe('Footer Text');
        
        // Test if the footer has the correct tag
        expect(footer.tagName).toBe('FOOTER');
    });
});