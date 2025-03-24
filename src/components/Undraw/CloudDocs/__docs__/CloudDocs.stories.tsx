import type { Meta, StoryObj } from "@storybook/react";
import CloudDocs from "../CloudDocs";

const meta: Meta<typeof CloudDocs> = { title: "unDraw/CloudDocs", component: CloudDocs };

export default meta;
type Story = StoryObj<typeof CloudDocs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
