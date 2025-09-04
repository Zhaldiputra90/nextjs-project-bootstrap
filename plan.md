### Plan for Changing Photo Sizes to 400px x 300px for Dosen and Tendik

#### Overview
The task is to change the photo sizes for dosen (lecturers) and tendik (educational staff) to a fixed size of 400px x 300px. This will involve modifying the relevant components where these images are displayed, ensuring that the new dimensions are applied consistently across the application.

#### Dependent Files
1. **src/components/DosenGrid.tsx**
2. **src/components/TendikGrid.tsx**
3. **src/app/dosen/[nidn]/page.tsx**
4. **src/app/tendik/[nip]/page.tsx**

#### Step-by-Step Changes

1. **src/components/DosenGrid.tsx**
   - Locate the `<img>` tag displaying the dosen photo.
   - Change the class from `className="w-full aspect-[3/4] object-cover"` to `className="w-[400px] h-[300px] object-cover"` to set the fixed dimensions.
   - Ensure that the aspect ratio is not applied since we want a fixed size.

   ```javascript
   <img
     src={dosen.foto}
     alt={dosen.nama}
     className="w-[400px] h-[300px] object-cover"
   />
   ```

2. **src/components/TendikGrid.tsx**
   - Locate the `<img>` tag displaying the tendik photo.
   - Change the class from `className="w-full aspect-[3/4] object-cover"` to `className="w-[400px] h-[300px] object-cover"` to set the fixed dimensions.

   ```javascript
   <img
     src={tendik.foto}
     alt={tendik.nama}
     className="w-[400px] h-[300px] object-cover"
   />
   ```

3. **src/app/dosen/[nidn]/page.tsx**
   - Locate the `<img>` tag displaying the dosen photo.
   - Change the class from `className="w-full aspect-[3/4] object-cover rounded-lg mb-4"` to `className="w-[400px] h-[300px] object-cover rounded-lg mb-4"` to set the fixed dimensions.

   ```javascript
   <img
     src={dosenData.foto}
     alt={dosenData.nama}
     className="w-[400px] h-[300px] object-cover rounded-lg mb-4"
   />
   ```

4. **src/app/tendik/[nip]/page.tsx**
   - Locate the `<img>` tag displaying the tendik photo.
   - Change the class from `className="w-full aspect-[3/4] object-cover rounded-lg mb-4"` to `className="w-[400px] h-[300px] object-cover rounded-lg mb-4"` to set the fixed dimensions.

   ```javascript
   <img
     src={tendikData.foto}
     alt={tendikData.nama}
     className="w-[400px] h-[300px] object-cover rounded-lg mb-4"
   />
   ```

#### UI/UX Considerations
- Ensure that the new image sizes do not disrupt the layout of the components. The fixed dimensions should maintain a clean and organized appearance.
- Test the changes on different screen sizes to ensure responsiveness and that the images are displayed correctly.

#### Error Handling
- Implement error handling for image loading failures by adding an `onError` handler to the `<img>` tags to display a placeholder image if the original fails to load.

```javascript
<img
  src={dosen.foto}
  alt={dosen.nama}
  className="w-[400px] h-[300px] object-cover"
  onError={(e) => { e.currentTarget.src = "https://placehold.co/40x30?text=Image+Not+Available"; }}
/>
```

### Summary
- Modify the image dimensions for dosen and tendik in four files: DosenGrid.tsx, TendikGrid.tsx, and their respective detail pages.
- Change the class names to set fixed dimensions of 40px x 30px.
- Implement error handling for image loading failures.
- Ensure the layout remains intact and responsive after changes.
