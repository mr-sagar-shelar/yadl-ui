import type { Meta, StoryObj } from "@storybook/react";
import ResourceGuard from "../ResourceGuard";

const meta: Meta<typeof ResourceGuard> = { title: "Azure/Other/ResourceGuard", component: ResourceGuard };

export default meta;
type Story = StoryObj<typeof ResourceGuard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
