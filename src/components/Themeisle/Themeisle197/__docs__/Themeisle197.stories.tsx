import type { Meta, StoryObj } from "@storybook/react";
import Themeisle197 from "../Themeisle197";

const meta: Meta<typeof Themeisle197> = { title: "Themeisle/Themeisle197", component: Themeisle197 };

export default meta;
type Story = StoryObj<typeof Themeisle197>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
