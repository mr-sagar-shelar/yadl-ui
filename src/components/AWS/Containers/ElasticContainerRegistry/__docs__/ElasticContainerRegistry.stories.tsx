import type { Meta, StoryObj } from "@storybook/react";
import ElasticContainerRegistry from "../ElasticContainerRegistry";

const meta: Meta<typeof ElasticContainerRegistry> = { title: "AWS/Containers/ElasticContainerRegistry", component: ElasticContainerRegistry };

export default meta;
type Story = StoryObj<typeof ElasticContainerRegistry>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
