import type { Meta, StoryObj } from "@storybook/react";
import Themeisle60 from "../Themeisle60";

const meta: Meta<typeof Themeisle60> = { title: "Themeisle/Themeisle60", component: Themeisle60 };

export default meta;
type Story = StoryObj<typeof Themeisle60>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
