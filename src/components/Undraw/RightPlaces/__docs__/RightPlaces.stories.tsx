import type { Meta, StoryObj } from "@storybook/react";
import RightPlaces from "../RightPlaces";

const meta: Meta<typeof RightPlaces> = { title: "unDraw/RightPlaces", component: RightPlaces };

export default meta;
type Story = StoryObj<typeof RightPlaces>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
