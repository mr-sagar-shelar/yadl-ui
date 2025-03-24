import type { Meta, StoryObj } from "@storybook/react";
import CloudDevelopmentKit from "../CloudDevelopmentKit";

const meta: Meta<typeof CloudDevelopmentKit> = { title: "AWS/DeveloperTools/CloudDevelopmentKit", component: CloudDevelopmentKit };

export default meta;
type Story = StoryObj<typeof CloudDevelopmentKit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
