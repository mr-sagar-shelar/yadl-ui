import type { Meta, StoryObj } from "@storybook/react";
import ElasticContainerService from "../ElasticContainerService";

const meta: Meta<typeof ElasticContainerService> = { title: "AWS/Containers/ElasticContainerService", component: ElasticContainerService };

export default meta;
type Story = StoryObj<typeof ElasticContainerService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
