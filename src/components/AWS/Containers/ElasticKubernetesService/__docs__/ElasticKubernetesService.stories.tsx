import type { Meta, StoryObj } from "@storybook/react";
import ElasticKubernetesService from "../ElasticKubernetesService";

const meta: Meta<typeof ElasticKubernetesService> = { title: "AWS/Containers/ElasticKubernetesService", component: ElasticKubernetesService };

export default meta;
type Story = StoryObj<typeof ElasticKubernetesService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
