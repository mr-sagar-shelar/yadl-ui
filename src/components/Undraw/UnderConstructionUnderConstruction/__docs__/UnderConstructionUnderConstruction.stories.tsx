import type { Meta, StoryObj } from "@storybook/react";
import UnderConstructionUnderConstruction from "../UnderConstructionUnderConstruction";

const meta: Meta<typeof UnderConstructionUnderConstruction> = { title: "unDraw/UnderConstructionUnderConstruction", component: UnderConstructionUnderConstruction };

export default meta;
type Story = StoryObj<typeof UnderConstructionUnderConstruction>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
