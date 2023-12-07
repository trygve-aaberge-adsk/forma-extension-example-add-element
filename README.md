# Forma extensions example - add element

This is an example of adding a simple mesh element to a proposal. It creates an element in the integrate element system by providing vertices and faces.

The element has another element as a child. This is done to be able to translate the coordinates of the mesh in order to place the mesh at the elevation of the terrain. If a GLB file is used instead, the transform can be put inside the GLB, so then it may suffice to create a single element without any child.
