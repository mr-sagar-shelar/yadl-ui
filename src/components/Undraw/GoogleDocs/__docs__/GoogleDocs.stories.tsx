import type { Meta, StoryObj } from "@storybook/react";
import GoogleDocs from "../GoogleDocs";

const meta: Meta<typeof GoogleDocs> = { title: "unDraw/GoogleDocs", component: GoogleDocs };

export default meta;
type Story = StoryObj<typeof GoogleDocs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
