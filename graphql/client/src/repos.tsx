import { Box, CircularProgress, Paper, Stack, Typography } from "@mui/material";

import { useStarWarsQuery } from "./graphql";

export function Repos() {
  const { data, loading } = useStarWarsQuery();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ flex: 1, maxWidth: "600px", p: 3 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Stack sx={{ mt: 3 }} direction="column" spacing={2}>
            {data?.starWars.map((item) => (
              <Paper sx={{ p: 2 }} key={item.name}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box>
                    <Typography color="primary" variant="body1">
                      {item.name}
                    </Typography>
                    <Typography variant="body2">{item.birth_year}</Typography>
                  </Box>
                </Stack>
              </Paper>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
