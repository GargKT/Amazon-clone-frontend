import { addToCart, cart, loadFromStorage } from '../../data/cart.js';

describe('test suite: addToCart', () => {
    beforeEach(() => {
        // Mock localStorage
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        // Reset cart before each test
        cart.length = 0;

        // Load from storage to initialize the cart
        loadFromStorage();
    });

    afterEach(() => {
        // Ensure the mock DOM element is cleaned up after each test
        const mockElement = document.querySelector('.js-quantity-e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        if (mockElement) {
            document.body.removeChild(mockElement);
        }
    });

    it('adds an existing product into cart', () => {
        // Setup initial cart state
        localStorage.getItem.and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });

        // Create a mock DOM element
        const mockQuantityInput = document.createElement('input');
        mockQuantityInput.className = 'js-quantity-e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        mockQuantityInput.value = '1';
        document.body.appendChild(mockQuantityInput);

        // Load from storage
        loadFromStorage();

        // Call the function to test
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        // Assertions
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);  // Since it's an existing product, quantity should be incremented
        expect(localStorage.setItem).toHaveBeenCalled();
    });

    it('adds a new product into cart', () => {
        // Ensure the cart is empty initially
        localStorage.getItem.and.callFake(() => {
            return JSON.stringify([]);
        });

        // Create a mock DOM element
        const mockQuantityInput = document.createElement('input');
        mockQuantityInput.className = 'js-quantity-e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        mockQuantityInput.value = '1';
        document.body.appendChild(mockQuantityInput);

        // Load from storage
        loadFromStorage();

        // Call the function to test
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        // Assertions
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1); // Since it's a new product, quantity should be set to 1
        expect(localStorage.setItem).toHaveBeenCalled();
    });
});
