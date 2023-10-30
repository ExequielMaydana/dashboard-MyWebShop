import React, { useCallback } from "react";

import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Formik, FieldArray } from "formik";
import Image from "next/image";
import axios from "axios";

const theme = createTheme({
  palette: {
    btnForm: {
      main: indigo[500],
      contrastText: "#FFF",
    },
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const colors = ["Blanco", "Negro", "Amarillo", "Verde", "Gris"];
const sizes = ["7", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5"];
const tags = ["Oversize", "Ropa comoda", "Casual", "Moda", "Formal"];

const FormAddProduct = () => {
  const handleFileChange = (event, push) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageURL = URL.createObjectURL(file);
      const imageObject = { file, previewURL: imageURL };
      console.log(imageObject);
      push(imageObject);
    }
  };

  const handleSelectOption = (event, push, remove, values, key) => {
    const {
      target: { value },
    } = event;

    const selectedValue = typeof value === "string" ? value.split(",") : value;
    const currentValue = values || [];

    const toAdd = selectedValue.filter((v) =>
      currentValue.every((item) => item[key] !== v)
    );

    const toRemove = currentValue.filter(
      (item) => !selectedValue.includes(item[key])
    );

    toAdd.forEach((v) => {
      const newItem = {};
      newItem[key] = v;
      push(newItem);
    });

    toRemove.forEach((item) => {
      const index = currentValue.findIndex((c) => c[key] === item[key]);
      if (index !== -1) {
        remove(index);
      }
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <Formik
            initialValues={{
              name: "",
              description: "",
              files: [],
              product_code: "",
              brand: "",
              stock: "",
              category: "",
              product_type: "",
              colors: [],
              sizes: [],
              tags: [],
              regular_price: 0,
              price_sale: 0,
            }}
            validate={(values) => {
              const errors = {};

              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              const formData = new FormData();

              for (const key in values) {
                if (values.hasOwnProperty(key)) {
                  if (key === "files") {
                    values[key].forEach((file) =>
                      formData.append("files", file.file)
                    );
                  } else {
                    if (Array.isArray(values[key])) {
                      values[key].forEach((item, index) => {
                        Object.keys(item).forEach((subKey) => {
                          formData.append(
                            `${key}[${index}][${subKey}]`,
                            item[subKey]
                          );
                        });
                      });
                    } else {
                      formData.append(key, values[key]);
                    }
                  }
                }
              }
              axios({
                method: "post",
                url: `${process.env.DOMAIN_PROD}/productos/crear-producto`,
                data: formData,
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                timeout: 0,
              })
                .then((response) => {
                  console.log(response.data);
                })
                .catch((error) => {
                  if (axios.isCancel(error)) {
                    console.error(
                      "La solicitud se canceló debido al tiempo de espera."
                    );
                  } else {
                    console.error(error);
                  }
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Box
                component="form"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  gap: "1em",
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                {/* Detalles */}

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    marginBottom: "2em",
                  }}
                >
                  <Box>
                    <p className="font-medium">Detalles</p>
                    <span className="text-darkGray">
                      Título, breve descripción, imagen...
                    </span>
                  </Box>
                  <Paper
                    elevation={1}
                    sx={{
                      width: "min(100%, 700px)",
                      padding: "1em",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2em",
                    }}
                  >
                    <TextField
                      id="standard-basic"
                      label="Nombre"
                      variant="outlined"
                      size="small"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      required
                    />

                    <TextField
                      id="outlined-multiline-static"
                      label="Descripción"
                      multiline
                      rows={4}
                      variant="outlined"
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      className="placeholder:text-white"
                    />

                    <FieldArray name="files">
                      {({ push, remove }) => (
                        <div className="w-full flex flex-col gap-4">
                          <label
                            htmlFor="imageInput"
                            className="cursor-pointer"
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px dashed grey",
                                padding: "2em",
                                gap: ".3em",
                              }}
                            >
                              <figure className="">
                                <Image
                                  width={150}
                                  height={100}
                                  src="/Images/addImageTwo.svg"
                                  alt="image add image"
                                  className="w-full h-full object-cover rounded-md"
                                />
                              </figure>
                              <p className="font-medium">
                                Soltar o Seleccionar archivo.
                              </p>
                              <span className="text-xs text-darkGray">
                                Suelte los archivos aquí o haga clic y navegue a
                                través de su máquina.
                              </span>
                              <input
                                type="file"
                                id="imageInput"
                                name="files"
                                multiple
                                style={{ display: "none" }}
                                onChange={(e) => handleFileChange(e, push)}
                              />
                            </Box>
                          </label>
                          <article className="w-full flex items-center justify-start gap-2 flex-wrap">
                            {values.files.map((image, index) => (
                              <figure
                                key={index}
                                className="relative w-[100px] h-[100px]"
                              >
                                <Image
                                  src={image.previewURL}
                                  alt={`Imagen ${index + 1}`}
                                  width={150}
                                  height={100}
                                  className="w-full h-full object-cover"
                                />
                                <button
                                  onClick={() => remove(index)}
                                  className="absolute top-[-.4em] right-[-.3em] w-[16px] h-[16px] flex items-center justify-center text-center text-xs rounded-full bg-black text-white"
                                >
                                  x
                                </button>
                              </figure>
                            ))}
                          </article>
                        </div>
                      )}
                    </FieldArray>
                  </Paper>
                </Box>

                {/* Propiedades */}

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    marginBottom: "2em",
                  }}
                >
                  <Box>
                    <p className="font-medium">Propiedades</p>
                    <span className="text-darkGray">
                      Funciones y atributos adicionales...{" "}
                    </span>
                  </Box>
                  <Paper
                    elevation={1}
                    sx={{
                      width: "min(100%, 700px)",
                      padding: "1em",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2em",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2em",
                      }}
                    >
                      <TextField
                        id="standard-basic"
                        label="Código de producto"
                        variant="outlined"
                        size="small"
                        type="text"
                        name="product_code"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.product_code}
                        fullWidth
                      />
                      <TextField
                        id="standard-basic"
                        label="Marca"
                        variant="outlined"
                        size="small"
                        type="text"
                        name="brand"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.brand}
                        fullWidth
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2em",
                      }}
                    >
                      <TextField
                        id="standard-basic"
                        label="Cantidad"
                        variant="outlined"
                        size="small"
                        type="number"
                        name="stock"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.stock}
                        fullWidth
                      />
                      <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">
                          categoría
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="category"
                          name="category"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.category}
                        >
                          <MenuItem value="indumentaria">Indumentaria</MenuItem>
                          <MenuItem value="calzado">Calzado</MenuItem>
                          <MenuItem value="accesorios">Accesorio</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Tipo de Producto
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Tipo de Producto"
                        name="product_type"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.product_type}
                      >
                        {values.category === "indumentaria" && [
                          <MenuItem key="remera" value="remera">
                            Remera
                          </MenuItem>,
                          <MenuItem key="chomba" value="campera">
                            Chomba
                          </MenuItem>,
                          <MenuItem key="pantalon" value="pantalon">
                            Pantalon
                          </MenuItem>,
                          <MenuItem key="jeans" value="jeans">
                            Jeans
                          </MenuItem>,
                          <MenuItem key="campera" value="campera">
                            Campera
                          </MenuItem>,
                          <MenuItem key="buzo" value="buzo">
                            Buzo
                          </MenuItem>,
                        ]}
                        {values.category === "calzado" && [
                          <MenuItem key="urbanas" value="urbanas">
                            Urbanas
                          </MenuItem>,
                          <MenuItem key="casuales" value="casuales">
                            Casuales
                          </MenuItem>,
                          <MenuItem key="deportivas" value="deportivas">
                            Deportivas
                          </MenuItem>,
                          <MenuItem key="entrenamiento" value="entrenamiento">
                            Entrenamiento
                          </MenuItem>,
                        ]}
                        {values.category === "accesorios" && [
                          <MenuItem key="mochila" value="mochila">
                            Mochila
                          </MenuItem>,
                          <MenuItem key="riñonera" value="riñonera">
                            Riñonera
                          </MenuItem>,
                          <MenuItem key="gorra" value="gorra">
                            Gorra
                          </MenuItem>,
                          <MenuItem key="media" value="media">
                            media
                          </MenuItem>,
                        ]}
                        {values.category !== "accesorios" &&
                          values.category !== "calzado" &&
                          values.category !== "indumentaria" && [
                            <MenuItem key="disabled" value="" disabled>
                              Debe seleccionar una Categoria
                            </MenuItem>,
                          ]}
                      </Select>
                    </FormControl>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2em",
                      }}
                    >
                      <FieldArray name="colors">
                        {({ push, remove }) => (
                          <FormControl fullWidth size="small">
                            <InputLabel id="demo-multiple-checkbox-label">
                              Colores
                            </InputLabel>
                            <Select
                              labelId="demo-multiple-checkbox-label"
                              id="demo-multiple-checkbox"
                              multiple
                              value={values.colors.map(
                                (colorObj) => colorObj.color
                              )}
                              onChange={(e) =>
                                handleSelectOption(
                                  e,
                                  push,
                                  remove,
                                  values.colors,
                                  "color"
                                )
                              }
                              input={<OutlinedInput label="colors" />}
                              renderValue={(selected) => selected.join(", ")}
                              MenuProps={MenuProps}
                            >
                              {colors.map((name) => (
                                <MenuItem key={name} value={name}>
                                  <Checkbox
                                    checked={values.colors.some(
                                      (colorObj) => colorObj.color === name
                                    )}
                                  />
                                  <ListItemText primary={name} />
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      </FieldArray>
                      <FieldArray name="sizes">
                        {({ push, remove }) => (
                          <FormControl fullWidth size="small">
                            <InputLabel id="demo-multiple-checkbox-label">
                              Talles
                            </InputLabel>
                            <Select
                              labelId="demo-multiple-checkbox-label"
                              id="demo-multiple-checkbox"
                              multiple
                              value={values.sizes.map((size) => size.size)}
                              onChange={(e) =>
                                handleSelectOption(
                                  e,
                                  push,
                                  remove,
                                  values.sizes,
                                  "size"
                                )
                              }
                              input={<OutlinedInput label="sizes" />}
                              renderValue={(selected) => selected.join(", ")}
                              MenuProps={MenuProps}
                            >
                              {sizes.map((name) => (
                                <MenuItem key={name} value={name}>
                                  <Checkbox
                                    checked={values.sizes.some(
                                      (sizeObj) => sizeObj.size === name
                                    )}
                                  />
                                  <ListItemText primary={name} />
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      </FieldArray>
                    </Box>
                    <FieldArray name="tags">
                      {({ push, remove }) => (
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-multiple-checkbox-label">
                            Etiquetas
                          </InputLabel>
                          <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={values.tags.map((tag) => tag.tag)}
                            label="Etiquetas"
                            onChange={(e) =>
                              handleSelectOption(
                                e,
                                push,
                                remove,
                                values.tags,
                                "tag"
                              )
                            }
                            input={<OutlinedInput label="tags" />}
                            renderValue={(selected) => selected.join(", ")}
                            MenuProps={MenuProps}
                          >
                            {tags.map((name) => (
                              <MenuItem key={name} value={name}>
                                <Checkbox
                                  checked={values.tags.some(
                                    (tagObj) => tagObj.tag === name
                                  )}
                                />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </FieldArray>
                  </Paper>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    marginBottom: "2em",
                  }}
                >
                  <Box>
                    <p className="font-medium">Precios</p>
                    <span className="text-darkGray">
                      Entradas relacionadas con el precio{" "}
                    </span>
                  </Box>

                  <Paper
                    elevation={1}
                    sx={{
                      width: "min(100%, 700px)",
                      padding: "1em",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1em",
                    }}
                  >
                    <TextField
                      id="standard-basic"
                      label="Precio regular"
                      variant="outlined"
                      size="small"
                      type="number"
                      name="regular_price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.regular_price}
                      fullWidth
                    />
                    <TextField
                      id="standard-basic"
                      label="Precio venta"
                      variant="outlined"
                      size="small"
                      type="number"
                      name="price_sale"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price_sale}
                      fullWidth
                    />
                  </Paper>
                </Box>

                <Button
                  variant="contained"
                  color="btnForm"
                  type="submit"
                  style={{
                    minWidth: "100px",
                    width: "150px",
                    backgroundColor: theme.palette.btnForm.main,
                  }}
                >
                  Agregar
                </Button>
              </Box>
            )}
          </Formik>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default FormAddProduct;
