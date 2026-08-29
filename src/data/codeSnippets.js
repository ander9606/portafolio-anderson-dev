// Fragmentos reales tomados de los repos de logiq360 y Zaturno — recortados para
// caber en una tarjeta, pero sin inventar ni alterar la lógica del código original.
export const codeSnippets = {
  "Node.js": {
    source: "logiq360 — backend/server.js",
    code: `require('dotenv').config();

// Validar variables de entorno críticas antes de arrancar
if (!process.env.ENCRYPTION_KEY || process.env.ENCRYPTION_KEY.length < 64) {
  logger.error('[FATAL] ENCRYPTION_KEY no está configurada o es muy corta.');
  process.exit(1);
}
if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  logger.error('[FATAL] JWT_SECRET no está configurada o es muy corta.');
  process.exit(1);
}

const app = express();
const httpServer = http.createServer(app);`,
  },
  Express: {
    source: "logiq360 — backend/modules/inventario/routes/categorias.js",
    code: `const router = express.Router()
router.use(verificarToken)

router.get('/',       verificarPermiso('inventario', 'ver'),      categoriaController.obtenerTodas)
router.get('/:id',    validateId(), verificarPermiso('inventario', 'ver'),
                                                                   categoriaController.obtenerPorId)
router.post('/',      verificarPermiso('inventario', 'crear'),    categoriaController.crear)
router.put('/:id',    validateId(), verificarPermiso('inventario', 'editar'),
                                                                   categoriaController.actualizar)
router.delete('/:id', validateId(), verificarPermiso('inventario', 'eliminar'),
                                                                   categoriaController.eliminar)`,
  },
  MySQL: {
    source: "logiq360 — backend/modules/inventario/models/CategoriaModel.js",
    code: `static async obtenerTodas(tenantId) {
  const query = \`
    SELECT c.id, c.nombre, c.emoji, c.padre_id,
           padre.nombre AS padre_nombre,
           \${countRelated('categorias', 'padre_id', 'c.id', '?')} AS total_subcategorias
    FROM categorias c
    LEFT JOIN categorias padre ON c.padre_id = padre.id AND padre.tenant_id = ?
    WHERE c.tenant_id = ?
    ORDER BY c.padre_id IS NULL DESC, c.padre_id, c.nombre
  \`;
  const [rows] = await pool.query(query, [tenantId, tenantId, tenantId]);
  return rows;
}`,
  },
  React: {
    source:
      "logiq360 — inventario-frontend/.../productos/ProductosNivelCategoria.jsx",
    code: `if (!categoriaPadre.hijos || categoriaPadre.hijos.length === 0) {
  return (
    <div className="text-center py-12 bg-white rounded-lg border border-slate-200">
      <Folder className="w-16 h-16 text-slate-300 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-slate-900 mb-2">No hay subcategorías</h3>
      <Button onClick={() => onCrearSubcategoria(categoriaPadre.id)}>
        <Plus className="w-4 h-4 mr-2" /> Crear Subcategoría
      </Button>
    </div>
  )
}

return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {categoriaPadre.hijos.map((subcategoria) => (
      <ProductSubcategoriaCard key={subcategoria.id} subcategoria={subcategoria} />
    ))}
  </div>
)`,
  },
  "React Query": {
    source: "logiq360 — inventario-frontend/.../inventario/hooks/useCategorias.js",
    code: `export const useGetCategorias = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['categorias'],
    queryFn: categoriasAPI.obtenerTodas
  })
  return { categorias: data?.data || [], isLoading, error, refetch }
}

export const useCreateCategoria = () => {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading, error } = useMutation({
    mutationFn: categoriasAPI.crear,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categorias'] })
      queryClient.invalidateQueries({ queryKey: ['categorias', 'padres'] })
    }
  })
  return { createCategoria: mutateAsync, isLoading, error }
}`,
  },
  "Tailwind CSS": {
    source: "logiq360 — inventario-frontend/src/shared/components/Button.jsx",
    code: `const base = \`
    inline-flex items-center justify-center
    font-medium rounded-xl
    transition-all duration-150
    focus:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.97]
    select-none
    \${fullWidth ? 'w-full' : ''}
\`

const sizes = {
    sm: 'px-3.5 py-2   text-sm   gap-1.5 min-h-[36px]',
    md: 'px-5   py-2.5 text-base gap-2   min-h-[44px]',
    lg: 'px-6   py-3.5 text-lg   gap-2.5 min-h-[52px]',
}`,
  },
  "React Native": {
    source: "Zaturno — apps/mobile/components/ui/StatCard.tsx",
    code: `export function StatCard({ value, label, color = 'text-primary', onPress }: StatCardProps) {
  const bg = BG_MAP[color] ?? 'bg-card';
  return (
    <Pressable
      onPress={onPress}
      className={\`flex-1 \${bg} rounded-2xl p-4 gap-1 border border-border active:opacity-70\`}
    >
      <Text className={\`text-2xl font-extrabold \${color}\`}>{value}</Text>
      <Text className="text-xs text-muted-foreground">{label}</Text>
    </Pressable>
  );
}`,
  },
  Expo: {
    source: "Zaturno — apps/mobile/features/turnos/useGeofence.ts",
    code: `import * as Location from 'expo-location';

const poll = async () => {
  try {
    const loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
    aplicarFix(loc.coords.latitude, loc.coords.longitude);
  } catch {
    const last = await Location.getLastKnownPositionAsync({});
    if (last) aplicarFix(last.coords.latitude, last.coords.longitude);
    else setUnavailable(true);
  }
};

const { status } = await Location.requestForegroundPermissionsAsync();
if (status !== 'granted') { setPermission(true); return; }
await poll();
intervalRef.current = setInterval(poll, 5_000);`,
  },
  "Git & GitHub": {
    source: "logiq360 — .github/workflows/deploy.yml",
    code: `script: |
  set -e
  cd /root/aprendizaje-inventario-carpas

  echo "=== Pulling latest changes ==="
  git fetch origin deploy
  git checkout deploy
  git reset --hard origin/deploy

  echo "=== Running deploy script ==="
  ./scripts/deploy.sh --https --ci`,
  },
  "CI/CD": {
    source: "logiq360 — .github/workflows/deploy.yml",
    code: `name: Deploy to Production

on:
  push:
    branches: [deploy]

concurrency:
  group: deploy-production
  cancel-in-progress: false

jobs:
  deploy:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.VPS_HOST }}
          # ...`,
  },
  Docker: {
    source: "logiq360 — backend/Dockerfile",
    code: `FROM node:20-alpine
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev
COPY . .

RUN addgroup -g 1001 -S appgroup && \\
    adduser -S appuser -u 1001 -G appgroup && \\
    chown -R appuser:appgroup /app
USER appuser

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \\
    CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["node", "server.js"]`,
  },
  Vite: {
    source: "logiq360 — inventario-frontend/vite.config.js",
    code: `export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      manifest: { name: 'logiq360', display: 'standalone' },
    }),
  ],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@inventario': path.resolve(__dirname, 'src/modules/inventario'),
      // ...
    }
  },
})`,
  },
  SSH: {
    source: "logiq360 — .github/workflows/deploy.yml",
    code: `- name: Deploy via SSH
  uses: appleboy/ssh-action@v1
  with:
    host: \${{ secrets.VPS_HOST }}
    username: \${{ secrets.VPS_USER }}
    key: \${{ secrets.VPS_SSH_KEY }}
    port: 22
    script: |
      cd /root/aprendizaje-inventario-carpas
      ./scripts/deploy.sh --https --ci`,
  },
};
