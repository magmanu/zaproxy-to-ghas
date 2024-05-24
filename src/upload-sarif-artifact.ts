import {DefaultArtifactClient} from '@actions/artifact'

async function uploadSarifArtifact(filename: string): Promise<void> {
  const artifactClient = new DefaultArtifactClient()
  const now = Math.floor(new Date().getTime() / 1000)
  const artifactName = `ZAProxy-sarif-report-${now}`
  const files = [filename]

  const rootDirectory = '.' // Also possible to use __dirname

  await artifactClient.uploadArtifact(artifactName, files, rootDirectory)
  return
}

export default uploadSarifArtifact
