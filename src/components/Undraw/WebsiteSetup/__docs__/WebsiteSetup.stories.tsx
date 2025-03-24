import type { Meta, StoryObj } from "@storybook/react";
import WebsiteSetup from "../WebsiteSetup";

const meta: Meta<typeof WebsiteSetup> = { title: "unDraw/WebsiteSetup", component: WebsiteSetup };

export default meta;
type Story = StoryObj<typeof WebsiteSetup>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
