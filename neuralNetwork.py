import numpy as np
import pandas as pd
import random 
# For this Neural Network I decided to implement it from scratch by making a layers for the neural network
#np.random.seed(0)



#Defining the layer class, I implemented the basic structure (neurons, inputs) with a forward and backward pass.
class dense_Layer():
    def __init__(self, n_inputs, n_neurons):
        self.weights = 0.10 * np.random.randn(n_inputs,n_neurons)
        self.biases = np.zeros((1, n_neurons))
        

    def forward(self, inputs):
        self.output = np.dot(inputs, self.weights) + self.biases


    # Backward pass (Gradient Calculation for weights and biases)
    def backward(self, dvalues):
        self.dweights = np.dot(self.inputs.T, dvalues)
        self.dbiases = np.sum(dvalues, axis=0, keepdims=True)
        self.dinputs = np.dot(dvalues, self.weights.T)



# Neural Network Class
class NeuralNetwork():
    def __init__(self):
        self.layers = []
        self.loss = None

    def add_layer(self, layer: dense_Layer):
        self.layers.append(layer)

    # Forward pass through all layers
    def forward(self, inputs):
        for layer in self.layers:
            layer.forward(inputs)
            inputs = layer.output
        return inputs

    # Training the neural network (gradient descent)
    def train(self, X, y, epochs, learning_rate):
        for epoch in range(epochs):
            # Forward pass
            output = self.forward(X)
            # Compute loss (MSE for regression)
            loss = np.mean((output - y)**2)
            self.loss = loss

            # Backward pass (for each layer)
            doutput = 2 * (output - y) / y.size
            for layer in reversed(self.layers):
                layer.backward(doutput)
                doutput = layer.dinputs

            # Update weights and biases
            for layer in self.layers:
                layer.weights -= learning_rate * layer.dweights
                layer.biases -= learning_rate * layer.dbiases

            # Print loss every 100 epochs
            if epoch % 100 == 0:
                print(f'Epoch {epoch} - Loss: {loss}')

    # Prediction using the trained network
    def predict(self, X):
        return self.forward(X)
    

    # From here I had chat modify the code to test it out on our values:

    # Data Loading
df = pd.read_csv("Data/merged_crime_vacant.csv")
X = df[["Vacant_Property_Count"]].values
y = df["Crime_Count"].values

# Train-Test Split
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Normalize input features
X_train = X_train / np.max(X_train)
X_test = X_test / np.max(X_test)

# Initialize and Train the Neural Network
nn = NeuralNetwork()

# Add layers to the neural network
nn.add_layer(dense_Layer(n_inputs=1, n_neurons=10, activation='relu'))  # Hidden layer with ReLU
nn.add_layer(dense_Layer(n_inputs=10, n_neurons=1))  # Output layer (no activation for regression)

# Train the model
nn.train(X_train, y_train, epochs=1000, learning_rate=0.01)

# Make predictions
y_pred = nn.predict(X_test)

# Model performance evaluation
from sklearn.metrics import mean_squared_error, r2_score
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error: {mse:.2f}")
print(f"R-Squared Score: {r2:.2f}")

# Visualize predictions vs actual values
import matplotlib.pyplot as plt
plt.scatter(X_test, y_test, color="blue", label="Actual")
plt.scatter(X_test, y_pred, color="red", label="Predicted")
plt.xlabel("Vacant Property Count")
plt.ylabel("Crime Count")
plt.title("Neural Network Predictions vs Actual Crime Counts")
plt.legend()
plt.show()